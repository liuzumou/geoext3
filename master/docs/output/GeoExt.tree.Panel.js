Ext.data.JsonP.GeoExt_tree_Panel({"tagname":"class","name":"GeoExt.tree.Panel","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Panel.js","href":"Panel.html#GeoExt-tree-Panel"}],"aliases":{"widget":["gx_treepanel","gx_tree_panel"]},"alternateClassNames":[],"extends":"Ext.tree.Panel","mixins":[],"requires":["Ext.tree.plugin.TreeViewDragDrop"],"uses":[],"members":[{"name":"dragDrop","tagname":"cfg","owner":"GeoExt.tree.Panel","id":"cfg-dragDrop","meta":{}},{"name":"constructor","tagname":"method","owner":"GeoExt.tree.Panel","id":"method-constructor","meta":{}},{"name":"getDragDrop","tagname":"method","owner":"GeoExt.tree.Panel","id":"method-getDragDrop","meta":{}},{"name":"handleLayerBeforeDrop","tagname":"method","owner":"GeoExt.tree.Panel","id":"method-handleLayerBeforeDrop","meta":{}},{"name":"handleLayerDrop","tagname":"method","owner":"GeoExt.tree.Panel","id":"method-handleLayerDrop","meta":{"private":true}},{"name":"needsDragDropPlugin","tagname":"method","owner":"GeoExt.tree.Panel","id":"method-needsDragDropPlugin","meta":{"private":true}},{"name":"setDragDrop","tagname":"method","owner":"GeoExt.tree.Panel","id":"method-setDragDrop","meta":{}},{"name":"findParentGroup","tagname":"method","owner":"GeoExt.tree.Panel","id":"static-method-findParentGroup","meta":{"static":true}},{"name":"getLayerIndex","tagname":"method","owner":"GeoExt.tree.Panel","id":"static-method-getLayerIndex","meta":{"static":true}}],"code_type":"ext_define","id":"class-GeoExt.tree.Panel","short_doc":"An Ext.tree.Panel. ...","component":false,"superclasses":["Ext.tree.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.tree.Panel<div class='subclass '><strong>GeoExt.tree.Panel</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.tree.plugin.TreeViewDragDrop</div><h4>Files</h4><div class='dependency'><a href='source/Panel.html#GeoExt-tree-Panel' target='_blank'>Panel.js</a></div></pre><div class='doc-contents'><p>An Ext.tree.Panel.</p>\n\n<p>Example:</p>\n\n<pre><code>var mapComponent = Ext.create('<a href=\"#!/api/GeoExt.component.Map\" rel=\"GeoExt.component.Map\" class=\"docClass\">GeoExt.component.Map</a>', {\n    map: new ol.Map({\n        layers: [layer],\n        view: new ol.View({\n            center: [0, 0],\n            zoom: 2\n        })\n    })\n});\n\nvar mapPanel = Ext.create('Ext.panel.Panel', {\n    title: '<a href=\"#!/api/GeoExt.component.Map\" rel=\"GeoExt.component.Map\" class=\"docClass\">GeoExt.component.Map</a> Example',\n    width: 800,\n    height: 600,\n    items: [mapComponent],\n    renderTo: 'mapDiv' // ID of the target &lt;div&gt;. Optional.\n});\n\nvar treeStore = Ext.create('<a href=\"#!/api/GeoExt.data.store.Tree\" rel=\"GeoExt.data.store.Tree\" class=\"docClass\">GeoExt.data.store.Tree</a>', {\n    model: 'GeoExt.data.TreeModel',\n    layerStore: mapPanel.getStore()\n});\n\nvar treePanel = Ext.create('<a href=\"#!/api/GeoExt.tree.Panel\" rel=\"GeoExt.tree.Panel\" class=\"docClass\">GeoExt.tree.Panel</a>', {\n    title: 'treePanel',\n    width: 400,\n    height: 600,\n    store: treeStore,\n    renderTo: 'treeDiv', // ID of the target &lt;div&gt;. Optional.\n    rootVisible: false\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-dragDrop' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-cfg-dragDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.Panel-cfg-dragDrop' class='name expandable'>dragDrop</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether to allow the rearranging of the layer hierarchy by dragging\nand dropping layers in the tree. ...</div><div class='long'><p>Whether to allow the rearranging of the layer hierarchy by dragging\nand dropping layers in the tree.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.tree.Panel-method-constructor' class='name expandable'>GeoExt.tree.Panel</a>( <span class='pre'></span> ) : <a href=\"#!/api/GeoExt.tree.Panel\" rel=\"GeoExt.tree.Panel\" class=\"docClass\">GeoExt.tree.Panel</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor function for tree panels. ...</div><div class='long'><p>Constructor function for tree panels.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.tree.Panel\" rel=\"GeoExt.tree.Panel\" class=\"docClass\">GeoExt.tree.Panel</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDragDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-cfg-dragDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.Panel-method-getDragDrop' class='name expandable'>getDragDrop</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of dragDrop. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.tree.Panel-cfg-dragDrop\" rel=\"GeoExt.tree.Panel-cfg-dragDrop\" class=\"docClass\">dragDrop</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleLayerBeforeDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-method-handleLayerBeforeDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.Panel-method-handleLayerBeforeDrop' class='name expandable'>handleLayerBeforeDrop</a>( <span class='pre'>node, data, overModel, dropPosition</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called as handler for beforedrop, this method decides whether to cancel\nor allow the drop. ...</div><div class='long'><p>Called as handler for beforedrop, this method decides whether to cancel\nor allow the drop. The dropoperation must be cancelled if the store was\nconfigured with <code>showLayerGroupNode: true</code>, and the user dragged a node\nbefore or outside the topmost group. In such a case we return false and\neffectively cancel the drop.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : HTMLElement<div class='sub-desc'><p>The TreeView node <strong>if any</strong> over which the\n    mouse was positioned.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data object gathered at mousedown time</p>\n</div></li><li><span class='pre'>overModel</span> : Ext.data.Model<div class='sub-desc'><p>The Model over which the drop gesture\n    took place.</p>\n</div></li><li><span class='pre'>dropPosition</span> : String<div class='sub-desc'><p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code>\n    depending on whether the mouse is above or below the midline of the\n    node, or the node is a branch node which accepts new child nodes.</p>\n</div></li></ul></div></div></div><div id='method-handleLayerDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-method-handleLayerDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.Panel-method-handleLayerDrop' class='name expandable'>handleLayerDrop</a>( <span class='pre'>node, data, overModel, dropPosition</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called when a drag and drop has finished, and orders the layers in the\ncollection. ...</div><div class='long'><p>Called when a drag and drop has finished, and orders the layers in the\ncollection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : HTMLElement<div class='sub-desc'><p>The TreeView node <strong>if any</strong> over which the\n    mouse was positioned.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data object gathered at mousedown time</p>\n</div></li><li><span class='pre'>overModel</span> : Ext.data.Model<div class='sub-desc'><p>The Model over which the drop gesture\n    took place.</p>\n</div></li><li><span class='pre'>dropPosition</span> : String<div class='sub-desc'><p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code>\n    depending on whether the mouse is above or below the midline of the\n    node, or the node is a branch node which accepts new child nodes.</p>\n</div></li></ul></div></div></div><div id='method-needsDragDropPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-method-needsDragDropPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.Panel-method-needsDragDropPlugin' class='name expandable'>needsDragDropPlugin</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Determines whether our tree view already has a drag and drop plugin, so\nthat we do not add it again. ...</div><div class='long'><p>Determines whether our tree view already has a drag and drop plugin, so\nthat we do not add it again.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether we need to add the <code>TreeViewDragDrop</code> plugin.</p>\n</div></li></ul></div></div></div><div id='method-setDragDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-cfg-dragDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.Panel-method-setDragDrop' class='name expandable'>setDragDrop</a>( <span class='pre'>dragDrop</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of dragDrop. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.tree.Panel-cfg-dragDrop\" rel=\"GeoExt.tree.Panel-cfg-dragDrop\" class=\"docClass\">dragDrop</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dragDrop</span> : Boolean<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-findParentGroup' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-static-method-findParentGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.Panel-static-method-findParentGroup' class='name expandable'>findParentGroup</a>( <span class='pre'>childLayer, startGroup</span> ) : ol.layer.Group<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>A utility method to find the ol.layer.Group which is the direct\nparent of the passed layer. ...</div><div class='long'><p>A utility method to find the <code>ol.layer.Group</code> which is the direct\nparent of the passed layer. Searching starts at the passed\nstartGroup. If <code>undefined</code> is returned, the layer is not a child of\nthe <code>startGroup</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childLayer</span> : ol.layer.Base<div class='sub-desc'><p>The layer whose group we want.</p>\n</div></li><li><span class='pre'>startGroup</span> : ol.layer.Group<div class='sub-desc'><p>The group layer that we will start\n    searching in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Group</span><div class='sub-desc'><p>The direct parent group or undefined if the\n    group cannot be determined.</p>\n</div></li></ul></div></div></div><div id='static-method-getLayerIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.Panel'>GeoExt.tree.Panel</span><br/><a href='source/Panel.html#GeoExt-tree-Panel-static-method-getLayerIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.Panel-static-method-getLayerIndex' class='name expandable'>getLayerIndex</a>( <span class='pre'>layer, group</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>A utility method to determine the zero based index of a layer in a\nlayer group. ...</div><div class='long'><p>A utility method to determine the zero based index of a layer in a\nlayer group. Will return <code>-1</code> if the layer isn't a direct child of\nthe group.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : ol.layer.Base<div class='sub-desc'><p>The layer whose index we want.</p>\n</div></li><li><span class='pre'>group</span> : ol.layer.Group<div class='sub-desc'><p>The group to search in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The index or <code>-1</code> if the layer isn't a direct child\n    of the group.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});