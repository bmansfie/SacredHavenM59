# Makefile for room editor

TOPDIR=..
!include $(TOPDIR)\common.mak

SOURCEDIR = $(ROOMEDITDIR)\source
RESDIR = $(ROOMEDITDIR)\res
OWLSOURCEDIR = $(ROOMEDITDIR)\owl-6.43\source\owlcore
OWLINCLUDEDIR = $(ROOMEDITDIR)\owl-6.43\include
OWLOUTDIR = $(ROOMEDITDIR)\owl-6.43\$(OUTDIR)
OWLLIBNAME = owl.lib

# /GR: Needs RTTI
# /wd4244: conversion, possible loss of data
# /wd4018: signed/unsigned mismatch

CFLAGS = $(CFLAGS:-GR-=-GR) -DOWL5_COMPAT -D__WIN32__ -D_OWLPCH -I$(ROOMEDITDIR)\include -I$(OWLINCLUDEDIR) -I$(RESDIR) \
	/wd4244 /wd4018

#
# Dependency List
#

all: makedirs $(OUTDIR)\roomedit.exe

OBJS = \
   $(OUTDIR)\save.obj\
   $(OUTDIR)\load.obj\
   $(OUTDIR)\textures.obj\
   $(OUTDIR)\bspmake.obj\
   $(OUTDIR)\dibutil.obj\
   $(OUTDIR)\move.obj\
   $(OUTDIR)\pal.obj\
   $(OUTDIR)\buildtim.obj\
   $(OUTDIR)\gfx.obj\
   $(OUTDIR)\memory.obj\
   $(OUTDIR)\names.obj\
   $(OUTDIR)\objects.obj\
   $(OUTDIR)\things.obj\
   $(OUTDIR)\undo.obj\
   $(OUTDIR)\wads.obj\
   $(OUTDIR)\windeu.obj\
   $(OUTDIR)\aboutdlg.obj\
   $(OUTDIR)\cnflddlg.obj\
   $(OUTDIR)\cnfsedlg.obj\
   $(OUTDIR)\cnfthdlg.obj\
   $(OUTDIR)\cnfvedlg.obj\
   $(OUTDIR)\entrydlg.obj\
   $(OUTDIR)\episdlg.obj\
   $(OUTDIR)\inpt2dlg.obj\
   $(OUTDIR)\lineedit.obj\
   $(OUTDIR)\lprogdlg.obj\
   $(OUTDIR)\mastdlg.obj\
   $(OUTDIR)\prefdlg.obj\
#   $(OUTDIR)\roomid.obj\
   $(OUTDIR)\seditdlg.obj\
   $(OUTDIR)\statdlg.obj\
   $(OUTDIR)\thingdlg.obj\
   $(OUTDIR)\vertdlg.obj\
   $(OUTDIR)\viewbmp.obj\
   $(OUTDIR)\wadlidlg.obj\
   $(OUTDIR)\workdlg.obj\
   $(OUTDIR)\newers.obj\
   $(OUTDIR)\bmp256ct.obj\
   $(OUTDIR)\editcli.obj\
   $(OUTDIR)\editscro.obj\
   $(OUTDIR)\infocont.obj\
   $(OUTDIR)\maincli.obj\
   $(OUTDIR)\mainfram.obj\
   $(OUTDIR)\mapdc.obj\
   $(OUTDIR)\tooltip.obj\
   $(OUTDIR)\windeapp.obj\
   $(OUTDIR)\windeapp.res

LIBS = \
	$(OWLOUTDIR)\$(OWLLIBNAME) \
	zlib.lib \
	user32.lib gdi32.lib shell32.lib advapi32.lib oleaut32.lib

OWLOBJS = \
	$(OWLOUTDIR)\animctrl.obj \
	$(OWLOUTDIR)\appdict.obj \
	$(OWLOUTDIR)\applicat.obj \
	$(OWLOUTDIR)\bardescr.obj \
	$(OWLOUTDIR)\bitmap.obj \
	$(OWLOUTDIR)\bitmapga.obj \
	$(OWLOUTDIR)\bitset.obj \
	$(OWLOUTDIR)\brush.obj \
	$(OWLOUTDIR)\btntextg.obj \
	$(OWLOUTDIR)\button.obj \
	$(OWLOUTDIR)\buttonga.obj \
	$(OWLOUTDIR)\castable.obj \
	$(OWLOUTDIR)\celarray.obj \
	$(OWLOUTDIR)\checkbox.obj \
	$(OWLOUTDIR)\checklst.obj \
	$(OWLOUTDIR)\checks.obj \
	$(OWLOUTDIR)\chooseco.obj \
	$(OWLOUTDIR)\choosefo.obj \
	$(OWLOUTDIR)\clipboar.obj \
	$(OWLOUTDIR)\clipview.obj \
	$(OWLOUTDIR)\cmdline.obj \
	$(OWLOUTDIR)\colmnhdr.obj \
	$(OWLOUTDIR)\color.obj \
	$(OWLOUTDIR)\combobex.obj \
	$(OWLOUTDIR)\combobox.obj \
	$(OWLOUTDIR)\commctrl.obj \
	$(OWLOUTDIR)\commdial.obj \
	$(OWLOUTDIR)\commview.obj \
	$(OWLOUTDIR)\configfl.obj \
	$(OWLOUTDIR)\control.obj \
	$(OWLOUTDIR)\controlb.obj \
	$(OWLOUTDIR)\controlg.obj \
	$(OWLOUTDIR)\coolbar.obj \
	$(OWLOUTDIR)\createdc.obj \
	$(OWLOUTDIR)\cursor.obj \
	$(OWLOUTDIR)\date.obj \
	$(OWLOUTDIR)\dateio.obj \
	$(OWLOUTDIR)\datep.obj \
	$(OWLOUTDIR)\datetime.obj \
	$(OWLOUTDIR)\dc.obj \
	$(OWLOUTDIR)\decframe.obj \
	$(OWLOUTDIR)\decmdifr.obj \
	$(OWLOUTDIR)\diaginit.obj \
	$(OWLOUTDIR)\dialog.obj \
	$(OWLOUTDIR)\dib.obj \
	$(OWLOUTDIR)\dibdc.obj \
	$(OWLOUTDIR)\dibitmap.obj \
	$(OWLOUTDIR)\docking.obj \
	$(OWLOUTDIR)\docmanag.obj \
	$(OWLOUTDIR)\doctpl.obj \
	$(OWLOUTDIR)\document.obj \
	$(OWLOUTDIR)\draglist.obj \
	$(OWLOUTDIR)\drawitem.obj \
#	$(OWLOUTDIR)\dumpstack.obj \
	$(OWLOUTDIR)\edit.obj \
	$(OWLOUTDIR)\editfile.obj \
	$(OWLOUTDIR)\editsear.obj \
	$(OWLOUTDIR)\editview.obj \
	$(OWLOUTDIR)\eventhan.obj \
	$(OWLOUTDIR)\exbase.obj \
	$(OWLOUTDIR)\except.obj \
	$(OWLOUTDIR)\file.obj \
	$(OWLOUTDIR)\filedoc.obj \
	$(OWLOUTDIR)\filename.obj \
	$(OWLOUTDIR)\filtval.obj \
	$(OWLOUTDIR)\findrepl.obj \
	$(OWLOUTDIR)\flatctrl.obj \
	$(OWLOUTDIR)\floatfra.obj \
	$(OWLOUTDIR)\font.obj \
	$(OWLOUTDIR)\framewin.obj \
	$(OWLOUTDIR)\fscroll.obj \
	$(OWLOUTDIR)\functor.obj \
	$(OWLOUTDIR)\gadget.obj \
	$(OWLOUTDIR)\gadgetli.obj \
	$(OWLOUTDIR)\gadgetwi.obj \
	$(OWLOUTDIR)\gauge.obj \
	$(OWLOUTDIR)\gdibase.obj \
	$(OWLOUTDIR)\gdiobjec.obj \
	$(OWLOUTDIR)\geometrp.obj \
	$(OWLOUTDIR)\geometrs.obj \
	$(OWLOUTDIR)\geometry.obj \
	$(OWLOUTDIR)\global.obj \
	$(OWLOUTDIR)\glyphbtn.obj \
	$(OWLOUTDIR)\groupbox.obj \
	$(OWLOUTDIR)\hlpmanag.obj \
	$(OWLOUTDIR)\hotkey.obj \
	$(OWLOUTDIR)\hslider.obj \
	$(OWLOUTDIR)\icon.obj \
	$(OWLOUTDIR)\imagelst.obj \
	$(OWLOUTDIR)\initdll.obj \
	$(OWLOUTDIR)\inputdia.obj \
	$(OWLOUTDIR)\ipaddres.obj \
	$(OWLOUTDIR)\layoutwi.obj \
	$(OWLOUTDIR)\libmain.obj \
	$(OWLOUTDIR)\listbox.obj \
	$(OWLOUTDIR)\listboxview.obj \
	$(OWLOUTDIR)\listviewctrl.obj \
	$(OWLOUTDIR)\locale.obj \
	$(OWLOUTDIR)\localeco.obj \
	$(OWLOUTDIR)\localeid.obj \
	$(OWLOUTDIR)\lookval.obj \
	$(OWLOUTDIR)\mailer.obj \
	$(OWLOUTDIR)\main.obj \
	$(OWLOUTDIR)\mci.obj \
	$(OWLOUTDIR)\mciwav.obj \
	$(OWLOUTDIR)\mdichild.obj \
	$(OWLOUTDIR)\mdiclien.obj \
	$(OWLOUTDIR)\mdiframe.obj \
	$(OWLOUTDIR)\memcbox.obj \
	$(OWLOUTDIR)\memory.obj \
	$(OWLOUTDIR)\memorydc.obj \
	$(OWLOUTDIR)\menu.obj \
	$(OWLOUTDIR)\menudesc.obj \
	$(OWLOUTDIR)\menugadg.obj \
	$(OWLOUTDIR)\messageb.obj \
	$(OWLOUTDIR)\metafile.obj \
	$(OWLOUTDIR)\metafldc.obj \
	$(OWLOUTDIR)\modegad.obj \
	$(OWLOUTDIR)\module.obj \
	$(OWLOUTDIR)\modversi.obj \
	$(OWLOUTDIR)\monthcal.obj \
	$(OWLOUTDIR)\msgthred.obj \
	$(OWLOUTDIR)\notetab.obj \
	$(OWLOUTDIR)\objstrm.obj \
	$(OWLOUTDIR)\opensave.obj \
	$(OWLOUTDIR)\owl.obj \
	$(OWLOUTDIR)\owlmain.obj \
	$(OWLOUTDIR)\pager.obj \
	$(OWLOUTDIR)\paintdc.obj \
	$(OWLOUTDIR)\palette.obj \
	$(OWLOUTDIR)\panespli.obj \
	$(OWLOUTDIR)\pen.obj \
	$(OWLOUTDIR)\picker.obj \
	$(OWLOUTDIR)\picklist.obj \
	$(OWLOUTDIR)\pictval.obj \
	$(OWLOUTDIR)\pictwind.obj \
	$(OWLOUTDIR)\popupgad.obj \
	$(OWLOUTDIR)\preview.obj \
	$(OWLOUTDIR)\prevwin.obj \
	$(OWLOUTDIR)\printdc.obj \
	$(OWLOUTDIR)\printdia.obj \
	$(OWLOUTDIR)\printer.obj \
	$(OWLOUTDIR)\printout.obj \
	$(OWLOUTDIR)\profile.obj \
	$(OWLOUTDIR)\progressbar.obj \
	$(OWLOUTDIR)\propsht.obj \
	$(OWLOUTDIR)\psview.obj \
	$(OWLOUTDIR)\radiobut.obj \
	$(OWLOUTDIR)\rangeval.obj \
	$(OWLOUTDIR)\rcntfile.obj \
	$(OWLOUTDIR)\regexp.obj \
	$(OWLOUTDIR)\regheap.obj \
	$(OWLOUTDIR)\region.obj \
	$(OWLOUTDIR)\registry.obj \
	$(OWLOUTDIR)\reglink.obj \
	$(OWLOUTDIR)\resource.obj \
	$(OWLOUTDIR)\richedit.obj \
	$(OWLOUTDIR)\richedpr.obj \
	$(OWLOUTDIR)\richedv.obj \
	$(OWLOUTDIR)\rolldial.obj \
	$(OWLOUTDIR)\scrollba.obj \
	$(OWLOUTDIR)\scroller.obj \
	$(OWLOUTDIR)\serialze.obj \
	$(OWLOUTDIR)\shellitm.obj \
	$(OWLOUTDIR)\shelwapi.obj \
	$(OWLOUTDIR)\slider.obj \
	$(OWLOUTDIR)\splashwi.obj \
	$(OWLOUTDIR)\static.obj \
	$(OWLOUTDIR)\statusba.obj \
	$(OWLOUTDIR)\swindow.obj \
	$(OWLOUTDIR)\system.obj \
	$(OWLOUTDIR)\tabbed.obj \
	$(OWLOUTDIR)\tabctrl.obj \
	$(OWLOUTDIR)\textgadg.obj \
	$(OWLOUTDIR)\theme.obj \
	$(OWLOUTDIR)\thread.obj \
	$(OWLOUTDIR)\time.obj \
	$(OWLOUTDIR)\timegadg.obj \
	$(OWLOUTDIR)\timeio.obj \
	$(OWLOUTDIR)\timep.obj \
	$(OWLOUTDIR)\tinycapt.obj \
	$(OWLOUTDIR)\tmplinst.obj \
	$(OWLOUTDIR)\toolbox.obj \
	$(OWLOUTDIR)\tooltip.obj \
	$(OWLOUTDIR)\tracewnd.obj \
	$(OWLOUTDIR)\transfer.obj \
	$(OWLOUTDIR)\transferbuffer.obj \
	$(OWLOUTDIR)\trayicon.obj \
	$(OWLOUTDIR)\treeviewctrl.obj \
	$(OWLOUTDIR)\uiborder.obj \
	$(OWLOUTDIR)\uiface.obj \
	$(OWLOUTDIR)\uihandle.obj \
	$(OWLOUTDIR)\uimetric.obj \
	$(OWLOUTDIR)\uipart.obj \
	$(OWLOUTDIR)\updown.obj \
	$(OWLOUTDIR)\urllink.obj \
	$(OWLOUTDIR)\ustring.obj \
	$(OWLOUTDIR)\validate.obj \
	$(OWLOUTDIR)\version.obj \
	$(OWLOUTDIR)\view.obj \
	$(OWLOUTDIR)\vslider.obj \
	$(OWLOUTDIR)\window.obj \
	$(OWLOUTDIR)\windowdc.obj \
	$(OWLOUTDIR)\winmain.obj \
	$(OWLOUTDIR)\winsock.obj \
	$(OWLOUTDIR)\wskaddr.obj \
	$(OWLOUTDIR)\wskerr.obj \
	$(OWLOUTDIR)\wskhostm.obj \
	$(OWLOUTDIR)\wskservm.obj \
	$(OWLOUTDIR)\wsksock.obj \
	$(OWLOUTDIR)\wsksockd.obj \
	$(OWLOUTDIR)\wsksockm.obj \
	$(OWLOUTDIR)\wsyscls.obj \
	$(OWLOUTDIR)\owl.res

{$(OWLSOURCEDIR)}.cpp{$(OWLOUTDIR)}.obj::
	$(CC) $(CFLAGS) /FpCpch /Fd$(OWLOUTDIR)\vc90.pdb /Fo$(OWLOUTDIR)/ -c $< 

{$(OWLSOURCEDIR)}.rc{$(OWLOUTDIR)}.res:
   $(RC) /i$(OWLINCLUDEDIR) /fo $@ $**

$(OWLOUTDIR)\$(OWLLIBNAME): $(OWLOBJS)
	$(LIBPRG) $** -OUT:$@

{$(RESDIR)}.rc{$(OUTDIR)}.res:
   $(RC) /fo $@ $**

makeowldir:
		-@if not exist $(OWLOUTDIR) mkdir $(OWLOUTDIR)

$(OUTDIR)\roomedit.exe : makedirs makeowldir $(OBJS) $(OWLOUTDIR)\$(OWLLIBNAME)
	$(LINK) $(LINKFLAGS) $(LINKWINDOWSFLAGS) @<<
	$(OBJS) $(LIBS) -OUT:$@
<<


makedirs:
        -@if not exist $(OUTDIR) mkdir $(OUTDIR)

{$(SOURCEDIR)}.c{$(OUTDIR)}.obj::
	$(CC) $(CFLAGS) /FpCpch /Fd$(OUTDIR)\vc90.pdb /Fo$(OUTDIR)/ -c $< 

{$(SOURCEDIR)}.cpp{$(OUTDIR)}.obj::
	$(CC) $(CFLAGS) /FpCpch /Fd$(OUTDIR)\vc90.pdb /Fo$(OUTDIR)/ -c $< 

{$(SOURCEDIR)}.rc{$(OUTDIR)}.res:
        $(RC) /fo $@ /i$(SOURCEDIR) $**

clean :
        @$(RM) $(OUTDIR)\*
        @$(RMDIR) $(OUTDIR)
        @$(RM) $(OWLOUTDIR)\*
        @$(RMDIR) $(OWLOUTDIR)
