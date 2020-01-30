<template>
    <div class="wrapper wrapper-content">
        <div class="row">
                <div class="col-lg-12">
                <div class="ibox ">
                    <div class="ibox-title">
                        <h5>Wyswig Summernote Editor</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i class="fa fa-wrench"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li><a href="#" class="dropdown-item">Config option 1</a>
                                </li>
                                <li><a href="#" class="dropdown-item">Config option 2</a>
                                </li>
                            </ul>
                            <a class="close-link">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div class="ibox-content no-padding">

                        <div class="summernote" style="display: none;">
                        </div>
                            <h3><br></h3><ul>
                            </ul>
                        </div></div><output class="note-status-output" aria-live="polite"></output><div class="note-statusbar" role="status">  <output class="note-status-output" aria-live="polite"></output>  <div class="note-resizebar" role="seperator" aria-orientation="horizontal" aria-label="Resize">    <div class="note-icon-bar"></div>    <div class="note-icon-bar"></div>    <div class="note-icon-bar"></div>  </div></div><div class="modal link-dialog" aria-hidden="false" tabindex="-1" role="dialog" aria-label="Insert Link"><div class="modal-dialog">  <div class="modal-content">    <div class="modal-header">      <h4 class="modal-title">Insert Link</h4>      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button>    </div>    <div class="modal-body"><div class="form-group note-form-group"><label class="note-form-label">Text to display</label><input class="note-link-text form-control note-form-control  note-input" type="text"></div><div class="form-group note-form-group"><label class="note-form-label">To what URL should this link go?</label><input class="note-link-url form-control note-form-control note-input" type="text" value="http://"></div><label class="custom-control custom-checkbox" for="sn-checkbox-open-in-new-window"> <input role="checkbox" type="checkbox" class="custom-control-input" id="sn-checkbox-open-in-new-window" checked="" aria-checked="true"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Open in new window</span></label></div>    <div class="modal-footer"><button type="submit" href="#" class="btn btn-primary note-btn note-btn-primary note-link-btn" disabled="">Insert Link</button></div>  </div></div></div><div class="modal" aria-hidden="false" tabindex="-1" role="dialog" aria-label="Insert Image"><div class="modal-dialog">  <div class="modal-content">    <div class="modal-header">      <h4 class="modal-title">Insert Image</h4>      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button>    </div>    <div class="modal-body"><div class="form-group note-form-group note-group-select-from-files"><label class="note-form-label">Select from files</label><input class="note-image-input note-form-control note-input" type="file" name="files" accept="image/*" multiple="multiple"></div><div class="form-group note-group-image-url" style="overflow:auto;"><label class="note-form-label">Image URL</label><input class="note-image-url form-control note-form-control note-input  col-md-12" type="text"></div></div>    <div class="modal-footer"><button type="submit" href="#" class="btn btn-primary note-btn note-btn-primary note-image-btn" disabled="">Insert Image</button></div>  </div></div></div><div class="modal" aria-hidden="false" tabindex="-1" role="dialog" aria-label="Insert Video"><div class="modal-dialog">  <div class="modal-content">    <div class="modal-header">      <h4 class="modal-title">Insert Video</h4>      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button>    </div>    <div class="modal-body"><div class="form-group note-form-group row-fluid"><label class="note-form-label">Video URL <small class="text-muted">(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)</small></label><input class="note-video-url form-control note-form-control note-input" type="text"></div></div>    <div class="modal-footer"><button type="submit" href="#" class="btn btn-primary note-btn note-btn-primary note-video-btn" disabled="">Insert Video</button></div>  </div></div></div><div class="modal" aria-hidden="false" tabindex="-1" role="dialog" aria-label="Help"><div class="modal-dialog">  <div class="modal-content">    <div class="modal-header">      <h4 class="modal-title">Help</h4>      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button>    </div>    <div class="modal-body" style="max-height: 300px; overflow: scroll;"><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>ENTER</kbd></label><span>Insert Paragraph</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+Z</kbd></label><span>Undoes the last command</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+Z</kbd></label><span>Redoes the last command</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>TAB</kbd></label><span>Tab</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>SHIFT+TAB</kbd></label><span>Untab</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+B</kbd></label><span>Set a bold style</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+I</kbd></label><span>Set a italic style</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+U</kbd></label><span>Set a underline style</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+S</kbd></label><span>Set a strikethrough style</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+BACKSLASH</kbd></label><span>Clean a style</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+L</kbd></label><span>Set left align</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+E</kbd></label><span>Set center align</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+R</kbd></label><span>Set right align</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+J</kbd></label><span>Set full align</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+NUM7</kbd></label><span>Toggle unordered list</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+SHIFT+NUM8</kbd></label><span>Toggle ordered list</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+LEFTBRACKET</kbd></label><span>Outdent on current paragraph</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+RIGHTBRACKET</kbd></label><span>Indent on current paragraph</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM0</kbd></label><span>Change current block's format as a paragraph(P tag)</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM1</kbd></label><span>Change current block's format as H1</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM2</kbd></label><span>Change current block's format as H2</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM3</kbd></label><span>Change current block's format as H3</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM4</kbd></label><span>Change current block's format as H4</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM5</kbd></label><span>Change current block's format as H5</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+NUM6</kbd></label><span>Change current block's format as H6</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+ENTER</kbd></label><span>Insert horizontal rule</span><div class="help-list-item"></div><label style="width: 180px; margin-right: 10px;"><kbd>CMD+K</kbd></label><span>Show Link Dialog</span></div>    <div class="modal-footer"><p class="text-center"><a href="http://summernote.org/" target="_blank">Summernote 0.8.10</a> · <a href="https://github.com/summernote/summernote" target="_blank">Project</a> · <a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a></p></div>  </div></div></div></div>

                    </div>
                </div>
            </div>
            </div>        
    </div>
</template>
<script>
export default {
    name: 'txtEdit',
    data () {
        return {
            note: null,
        }
    },
    mounted () {
        this.note = $('.summernote').summernote();
        window.addEventListener('keydown', this.keyDown)
    },
    methods: {
        keyDown: function () {
          const activeElement = document.getElementsByClassName('note-editable card-block')[0]
          if (activeElement && !isNaN(event.key) && event.key > 0) {
            activeElement.innerHTML = event.key
          }
        }},
    components: {
    }
}
</script>

