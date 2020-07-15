(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("a9bc2ae3-00f8-4d5c-87d5-10bf2fefc6fe");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a9bc2ae3-00f8-4d5c-87d5-10bf2fefc6fe' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;0b7b2695-01ec-4ad9-b35a-76790d833147&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;62774&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;62775&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;62776&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;62778&quot;}},&quot;id&quot;:&quot;62777&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;62763&quot;}},&quot;id&quot;:&quot;62757&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62745&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;62765&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;62755&quot;},{&quot;id&quot;:&quot;62756&quot;},{&quot;id&quot;:&quot;62757&quot;},{&quot;id&quot;:&quot;62758&quot;},{&quot;id&quot;:&quot;62759&quot;},{&quot;id&quot;:&quot;62760&quot;},{&quot;id&quot;:&quot;62761&quot;},{&quot;id&quot;:&quot;62762&quot;}]},&quot;id&quot;:&quot;62820&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;62747&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;62750&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;62779&quot;}},&quot;id&quot;:&quot;62783&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;62786&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;62748&quot;}},&quot;id&quot;:&quot;62747&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;62764&quot;}},&quot;id&quot;:&quot;62759&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62792&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62793&quot;}},&quot;id&quot;:&quot;62774&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#2a2eec&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6.0},&quot;x&quot;:{&quot;value&quot;:-1.135840820153207},&quot;y&quot;:{&quot;value&quot;:0}},&quot;id&quot;:&quot;62800&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62816&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;62779&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;62780&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;62781&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;62783&quot;}},&quot;id&quot;:&quot;62782&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62795&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62792&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62743&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;62797&quot;}]},&quot;id&quot;:&quot;62796&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62741&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#2a2eec&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6.0},&quot;x&quot;:{&quot;value&quot;:-1.135840820153207},&quot;y&quot;:{&quot;value&quot;:0}},&quot;id&quot;:&quot;62799&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;x&quot;:{&quot;value&quot;:0},&quot;y&quot;:{&quot;value&quot;:0}},&quot;id&quot;:&quot;62781&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;62794&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62795&quot;}},&quot;id&quot;:&quot;62779&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62755&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62786&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#2a2eec&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62776&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;y&quot;,&quot;text_font_size&quot;:{&quot;value&quot;:&quot;15pt&quot;}},&quot;id&quot;:&quot;62803&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62752&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62761&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62793&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;62738&quot;},0,0]]},&quot;id&quot;:&quot;62819&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;62788&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;62752&quot;}},&quot;id&quot;:&quot;62751&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;62821&quot;},{&quot;id&quot;:&quot;62819&quot;}]},&quot;id&quot;:&quot;62822&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;62751&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;62754&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;62762&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;62820&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;62821&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;62755&quot;},{&quot;id&quot;:&quot;62756&quot;},{&quot;id&quot;:&quot;62757&quot;},{&quot;id&quot;:&quot;62758&quot;},{&quot;id&quot;:&quot;62759&quot;},{&quot;id&quot;:&quot;62760&quot;},{&quot;id&quot;:&quot;62761&quot;},{&quot;id&quot;:&quot;62762&quot;}]},&quot;id&quot;:&quot;62765&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;62774&quot;}},&quot;id&quot;:&quot;62778&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62760&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;62763&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#2a2eec&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62775&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;bpv=0.53&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;62782&quot;}]},&quot;id&quot;:&quot;62797&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62788&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62794&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62758&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;62747&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;62750&quot;},{&quot;id&quot;:&quot;62754&quot;},{&quot;id&quot;:&quot;62796&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;62751&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:288,&quot;plot_width&quot;:432,&quot;renderers&quot;:[{&quot;id&quot;:&quot;62777&quot;},{&quot;id&quot;:&quot;62782&quot;},{&quot;id&quot;:&quot;62801&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;62803&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;62765&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;62739&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;62743&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;62741&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;62745&quot;}},&quot;id&quot;:&quot;62738&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;62816&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62817&quot;}},&quot;id&quot;:&quot;62798&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62756&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62739&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62817&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;62764&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;x&quot;:{&quot;value&quot;:0},&quot;y&quot;:{&quot;value&quot;:0}},&quot;id&quot;:&quot;62780&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;62798&quot;}},&quot;id&quot;:&quot;62802&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;62798&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;62799&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;62800&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;62802&quot;}},&quot;id&quot;:&quot;62801&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62748&quot;,&quot;type&quot;:&quot;BasicTicker&quot;}],&quot;root_ids&quot;:[&quot;62822&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"0b7b2695-01ec-4ad9-b35a-76790d833147","root_ids":["62822"],"roots":{"62822":"a9bc2ae3-00f8-4d5c-87d5-10bf2fefc6fe"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();