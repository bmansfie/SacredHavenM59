TOPDIR=..\..\..
!include $(TOPDIR)\common.mak

SOURCEDIR = .
OUTDIR = .

.SUFFIXES: .bbg

BGFS = prism1.bgf 

!include $(RESOURCEDIR)\copy.mak

{$(SOURCEDIR)}.bbg.bgf:
   $(MAKEBGF) -o $(OUTDIR)\$*.bgf @$*.bbg

clean:
