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
    
      
      
    
      var element = document.getElementById("93a6c74d-0386-4628-8a6d-b89a84766a82");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '93a6c74d-0386-4628-8a6d-b89a84766a82' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;e78d8710-bb07-4ab5-931e-15aefb335617&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65226&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65191&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65194&quot;},{&quot;id&quot;:&quot;65198&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65195&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65232&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65238&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65206&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65183&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65187&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65185&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65189&quot;}},&quot;id&quot;:&quot;65182&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65164&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65167&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65215&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65213&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65214&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65215&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65217&quot;}},&quot;id&quot;:&quot;65216&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65158&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65205&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65216&quot;}]},&quot;id&quot;:&quot;65228&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65213&quot;}},&quot;id&quot;:&quot;65217&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65165&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65252&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65160&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65163&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65199&quot;},{&quot;id&quot;:&quot;65200&quot;},{&quot;id&quot;:&quot;65201&quot;},{&quot;id&quot;:&quot;65202&quot;},{&quot;id&quot;:&quot;65203&quot;},{&quot;id&quot;:&quot;65204&quot;}]},&quot;id&quot;:&quot;65206&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65185&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65192&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65199&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65251&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65252&quot;}},&quot;id&quot;:&quot;65229&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65229&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65230&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65231&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65233&quot;}},&quot;id&quot;:&quot;65232&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65174&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65189&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65214&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65245&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65196&quot;}},&quot;id&quot;:&quot;65195&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65219&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65230&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65160&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65163&quot;},{&quot;id&quot;:&quot;65167&quot;},{&quot;id&quot;:&quot;65227&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65164&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65216&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65219&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65175&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65152&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65156&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65154&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65158&quot;}},&quot;id&quot;:&quot;65151&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65238&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65187&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65205&quot;}},&quot;id&quot;:&quot;65201&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65168&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65151&quot;},{&quot;id&quot;:&quot;65182&quot;}]},&quot;id&quot;:&quot;65234&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65203&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65204&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65171&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;ObTIdr6fmj+DwMqhRbazPzeJQWDl0MI/nu+nxks3yT/pJjEIrBzKP8uhRbbz/cQ/y6FFtvP9tD/Jdr6fGi+tPxkEVg4tsp0/ObTIdr6fij/8qfHSTWJgP/yp8dJNYmA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[12]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65225&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65226&quot;}},&quot;id&quot;:&quot;65213&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65196&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65222&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65174&quot;}},&quot;id&quot;:&quot;65170&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65251&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65195&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65198&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65202&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65173&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65243&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65192&quot;}},&quot;id&quot;:&quot;65191&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65229&quot;}},&quot;id&quot;:&quot;65233&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65169&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65245&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65154&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65243&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65172&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65168&quot;},{&quot;id&quot;:&quot;65169&quot;},{&quot;id&quot;:&quot;65170&quot;},{&quot;id&quot;:&quot;65171&quot;},{&quot;id&quot;:&quot;65172&quot;},{&quot;id&quot;:&quot;65173&quot;}]},&quot;id&quot;:&quot;65175&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65220&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65161&quot;}},&quot;id&quot;:&quot;65160&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65225&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65152&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65183&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65222&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65165&quot;}},&quot;id&quot;:&quot;65164&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65220&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65231&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65156&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65191&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65194&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65228&quot;}]},&quot;id&quot;:&quot;65227&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65161&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65200&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;}],&quot;root_ids&quot;:[&quot;65234&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"e78d8710-bb07-4ab5-931e-15aefb335617","root_ids":["65234"],"roots":{"65234":"93a6c74d-0386-4628-8a6d-b89a84766a82"}}];
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