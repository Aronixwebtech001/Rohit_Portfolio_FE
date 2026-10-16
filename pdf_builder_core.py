import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

# ── Color Palette tailored to Rohit Jangir Portfolio ────────────────────────
PRIMARY_NAVY = colors.HexColor("#1C323A")       # Deep Navy Brand
PRIMARY_NAVY_DARK = colors.HexColor("#0F1B21")  # Dark Slate Brand
ACCENT_SLATE = colors.HexColor("#485E68")       # Medium Slate Accent
ACCENT_GOLD = colors.HexColor("#D4A643")        # Gold Accent
BG_LIGHT = colors.HexColor("#F8FAFC")          # Light Background
BG_CARD = colors.HexColor("#EDF0F0")           # Card Background
BORDER_COLOR = colors.HexColor("#E2E8F0")      # Divider Border
TEXT_DARK = colors.HexColor("#0F172A")         # Primary Text
TEXT_MUTED = colors.HexColor("#475569")        # Muted Text
CODE_BG = colors.HexColor("#F1F5F9")           # Code Snippet Background
CALLOUT_BG = colors.HexColor("#F0F4F7")        # Callout Background

class NumberedCanvas(canvas.Canvas):
    """
    Two-pass canvas to dynamically compute and print 'Page X of Y'
    along with running header and footer.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, total_pages):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(TEXT_MUTED)

        # Running Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(
                54, 750,
                "Rohit Jangir Portfolio — Frontend (FE) Setup & Developer Manual"
            )
            self.setStrokeColor(BORDER_COLOR)
            self.setLineWidth(0.5)
            self.line(54, 744, 558, 744)

        # Running Footer (all pages)
        self.setStrokeColor(BORDER_COLOR)
        self.setLineWidth(0.5)
        self.line(54, 45, 558, 45)

        self.drawString(
            54, 34,
            "Confidential & Proprietary — Aronix Web Tech & Rohit Jangir Portfolio"
        )
        page_str = f"Page {self._pageNumber} of {total_pages}"
        self.drawRightString(558, 34, page_str)
        self.restoreState()

def create_styles():
    base = getSampleStyleSheet()
    styles = {}

    styles['DocTitle'] = ParagraphStyle(
        'DocTitle',
        parent=base['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=colors.white,
        spaceAfter=6
    )
    styles['DocSubtitle'] = ParagraphStyle(
        'DocSubtitle',
        parent=base['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor("#C9D3D8"),
        spaceAfter=0
    )
    styles['SectionH1'] = ParagraphStyle(
        'SectionH1',
        parent=base['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=19,
        textColor=PRIMARY_NAVY,
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )
    styles['SectionH2'] = ParagraphStyle(
        'SectionH2',
        parent=base['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=ACCENT_SLATE,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )
    styles['Body'] = ParagraphStyle(
        'Body',
        parent=base['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=TEXT_DARK,
        spaceAfter=6
    )
    styles['BodyBold'] = ParagraphStyle(
        'BodyBold',
        parent=styles['Body'],
        fontName='Helvetica-Bold'
    )
    styles['BulletText'] = ParagraphStyle(
        'BulletText',
        parent=styles['Body'],
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=4
    )
    styles['CodeBlock'] = ParagraphStyle(
        'CodeBlock',
        parent=base['Code'],
        fontName='Courier',
        fontSize=8.5,
        leading=12,
        textColor=PRIMARY_NAVY_DARK,
        spaceBefore=2,
        spaceAfter=2
    )
    styles['TableHeader'] = ParagraphStyle(
        'TableHeader',
        parent=base['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.white
    )
    styles['TableCell'] = ParagraphStyle(
        'TableCell',
        parent=base['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=TEXT_DARK
    )
    styles['TableCellCode'] = ParagraphStyle(
        'TableCellCode',
        parent=base['Normal'],
        fontName='Courier',
        fontSize=8,
        leading=11,
        textColor=PRIMARY_NAVY_DARK
    )
    styles['CalloutText'] = ParagraphStyle(
        'CalloutText',
        parent=styles['Body'],
        fontSize=9,
        leading=13,
        textColor=PRIMARY_NAVY
    )
    return styles

def build_banner(styles):
    data = [
        [
            Paragraph("Rohit Jangir Portfolio — Frontend (FE)", styles['DocTitle']),
        ],
        [
            Paragraph("Complete Zero-to-Advanced Step-by-Step Setup, Installation & Developer Manual", styles['DocSubtitle']),
        ],
        [
            Spacer(1, 4)
        ]
    ]
    meta_table_data = [
        [
            Paragraph("<b>Target Audience:</b> Beginner to Advanced Developers", styles['CalloutText']),
            Paragraph("<b>Stack:</b> React 18, TypeScript, Vite 5, Tailwind CSS", styles['CalloutText'])
        ],
        [
            Paragraph("<b>Document Version:</b> v1.0.0 (Production Release)", styles['CalloutText']),
            Paragraph("<b>Date / Status:</b> October 2026 | Verified & Active", styles['CalloutText'])
        ]
    ]
    meta_table = Table(meta_table_data, colWidths=[240, 240])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#F0F4F7")),
        ('PADDING', (0,0), (-1,-1), 5),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#E2E8F0")),
    ]))

    banner_data = [
        [Paragraph("<b>ROHIT JANGIR OFFICIAL PORTFOLIO</b>", ParagraphStyle('TopTag', fontName='Helvetica-Bold', fontSize=8.5, textColor=ACCENT_GOLD, spaceAfter=4))],
        [Paragraph("Frontend Developer & Setup Guide", styles['DocTitle'])],
        [Paragraph("Comprehensive Zero-to-Advanced Setup, Installation, Dependencies, API Testing & Deployment Manual", styles['DocSubtitle'])],
        [Spacer(1, 6)],
        [meta_table]
    ]

    t = Table(banner_data, colWidths=[504])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), PRIMARY_NAVY),
        ('PADDING', (0, 0), (-1, -1), 16),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, -1), (-1, -1), 14),
    ]))
    return t

def make_callout(text, styles, title="NOTE / TIP:"):
    p = Paragraph(f"<b>{title}</b> {text}", styles['CalloutText'])
    t = Table([[p]], colWidths=[504])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CALLOUT_BG),
        ('BOX', (0,0), (-1,-1), 0.75, ACCENT_SLATE),
        ('LINEBEFORE', (0,0), (0,-1), 3.5, PRIMARY_NAVY),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    return t

def make_code_box(code_text, styles):
    lines = code_text.strip().split("\n")
    data = [[Paragraph(line.replace(" ", "&nbsp;") if line.strip() else "&nbsp;", styles['CodeBlock'])] for line in lines]
    t = Table(data, colWidths=[504])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CODE_BG),
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 1.5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,0), 4),
        ('BOTTOMPADDING', (0,-1), (-1,-1), 4),
    ]))
    return t
