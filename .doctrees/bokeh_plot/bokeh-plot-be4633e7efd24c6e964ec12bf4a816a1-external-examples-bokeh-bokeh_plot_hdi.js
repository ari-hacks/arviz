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
    
      
      
    
      var element = document.getElementById("3476b476-b584-447e-91f7-49de768c3baf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3476b476-b584-447e-91f7-49de768c3baf' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;28a7facc-35be-4888-b2ee-47bbcc76f213&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66691&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66692&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66693&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66695&quot;}},&quot;id&quot;:&quot;66694&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66670&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66698&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66660&quot;}},&quot;id&quot;:&quot;66659&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66704&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66705&quot;}},&quot;id&quot;:&quot;66686&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66692&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66651&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;Ix5vzXTTCcCba0IHWs0EwGNcdiXbWgTAj23c43nkA8A9qTIhmfT/v5cHbuxrfvy/EeTShzVW/L/i1px7sPj7v2hAFsblKPq/Ff8jJCui9r9Rbf7tYCD2v+JsWQ6i1/S/YSzaTaQH87+FxyImP87yv2vK4cpNo/K/9SDD+VwO8b9Yi3vBE0Dwv6fLqGiLEe6/vZLWoyvR7b/x8dSKq5btv91SdCQ95uu/GnR+ghbg67/zUrUxQerqvzW1SUW7uOq/Xg4Y8dbz6b/X0I0O4dznv+XP18SX4+W//ZA7YhNq5b8G9oTLEi/kv47AmhmCruO/uoGsfoCO4b8tOm6+vD/hv3v8c/qeJ+G/8gcV78s+3r9ixYGEKW/dv/I9HHa9TN2/8W2Bu8UY2r8gebymWb/Zv63r4M9etta/F/KhjXVA1r892RgSSvPUv45AvWA0ctS/G7SEWlBX0L/61xmMjCPJv9nT7RUhAce/A7cMdpeAw79Cvu2kytuvv7A6Cs+jeqO/HjANKPGmlL9oGMYrwf2Qv0EhWiUAE4q/qpbkI+nvdr/M2mWURCxnP5jTFo7HyqE/YfPr6vXapT/o4xhhPqGsP8SjOEubW74/03Qk3mjhwD9CFnN31AHFP3SVuwNCy84/snJp61os0D/mgMBChcLQP2osebvEEdI/IpLxpiqQ1z+T2IQ5OqDXP4AV5qAbiNg/KQslHRRR2T8AvoipIdPaPwskRSjrDOI/zsoZyFJP4j/tujRlR6/jP77OtYgBe+U/PLFqw2CC5T9+EGQWtCnnP9VwMFKk3uc/jkukMIdr6T/s2/r51ULqPzcQ6nAeJuw/TOI0aMr+7D9iHlg489vuP2sxa4sGx/A/5RFhif7v8D949f08BnDxP/Rpq3ZWkvE/avtbvP2t8j8AzhuyggzzP2mKNvzZHPM/mGl7SE1c9D8tEdAsJ4D0PxiF/9AQofU/UwjkNyQ69z8EX/5dtLf3P6sC3VeR+fc/YSaPFF+y+D+sQt8WY5H5PzAjdZ1CM/4/gM8aCkDH/z9ddbd5k5EAQIcHfo/9IgFAh3dBrFaGAUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;dIdDyiyy2D/KKHvxS2XmPzpHE7VJSuc/4iRHOAw36D9iq2ZvswXwPzT8yAnKwPE/+I0WPOXU8T+PlDHCpwPyP8zf9ByN6/I/dgDubequ9D9YyQCJz+/0P49J0/gulPU/0OkS2S189j8+nO5s4Jj2P8oajxpZrvY/hm8eg9F49z9UOkIf9t/3PxbN1SWde/g/UVsKF7WL+D+Ew0odVZr4P0nr4rZwBvk/+mJgX/oH+T9Dq5Kzb0X5P7OSrS7RUfk/aPy5QwqD+T/Ki1y8xwj6PwcMyg4ah/o/wRtxJ3ul+j9+wh5NO/T6P9xPmXlfFPs/kt9U4F+c+z91cWTQELD7P+EAY0EYtvs/Al8dgiY4/D9Ux2/PGlL8P0J4PFFoVvw/QtKPSOe8/D/ccCjLFMj8P4riAyY0Kf0/vcFLTvE3/T/Y5Ly9lmH9P+5X6HO5cf0/fWmv9BX1/T+AYj43x23+P8Iioe7tj/4/kDSfiPbH/j8HSWzVkID/PxXXw3AVsv8/oOWvHbLW/z/Pc6h9BN7/P9+l2v/s5f8/tQ1uC4j0/z+7jJKI5QIAQKctHI+VIwBA59fV67UrAEDIMcJ8QjkAQI/iLG1ueQBApyPxRguHAECymLujDqgAQKzcHRBa9gBAK5e2rsUCAUAOCCxUKAwBQMeSt0scIQFAIhlvqgJ5AUCJTZijA3oBQFhhDrqBiAFAs1DSQRGVAUDgi5gaMq0BQIGkCGWdQQJAWjkDWepJAkBel6bs6HUCQNi5FjFgrwJAKFZtGEywAkAQgsyCNuUCQBsORorU+wJAcokU5nAtA0B+Wz+/WkgDQAdCHc7DhANASpwGTdmfA0DMAwtnftsDQFvM2qLBMQRAeURYov87BEBefT+PAVwEQH3aqp2VZARA2v4Wb3+rBECA84asIMMEQJqiDX82xwRAZtoeUhMXBUBLBDTLCSAFQEbhPzREaAVAFQL5DYnOBUDBl38X7e0FQKtA91Vk/gVAmMkjxZcsBkCr0LfFWGQGQMxIXafQjAdA4LOGAtDxB0Cuutu8yUgIQMQDv8d+kQhAxLsgVivDCEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66706&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66707&quot;}},&quot;id&quot;:&quot;66691&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66673&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66686&quot;}},&quot;id&quot;:&quot;66690&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66691&quot;}},&quot;id&quot;:&quot;66695&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66693&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66707&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66655&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66706&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66674&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66660&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66697&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66675&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66686&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66687&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66688&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66690&quot;}},&quot;id&quot;:&quot;66689&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66676&quot;}},&quot;id&quot;:&quot;66671&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66700&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66664&quot;}},&quot;id&quot;:&quot;66663&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66668&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66672&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66659&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66662&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66664&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66704&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66698&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66688&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66705&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66687&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66700&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66659&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66662&quot;},{&quot;id&quot;:&quot;66666&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66663&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66689&quot;},{&quot;id&quot;:&quot;66694&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66697&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66677&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66651&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66655&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66653&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66657&quot;}},&quot;id&quot;:&quot;66650&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66663&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66666&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66653&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66657&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66667&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66675&quot;}},&quot;id&quot;:&quot;66669&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66676&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66667&quot;},{&quot;id&quot;:&quot;66668&quot;},{&quot;id&quot;:&quot;66669&quot;},{&quot;id&quot;:&quot;66670&quot;},{&quot;id&quot;:&quot;66671&quot;},{&quot;id&quot;:&quot;66672&quot;},{&quot;id&quot;:&quot;66673&quot;},{&quot;id&quot;:&quot;66674&quot;}]},&quot;id&quot;:&quot;66677&quot;,&quot;type&quot;:&quot;Toolbar&quot;}],&quot;root_ids&quot;:[&quot;66650&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"28a7facc-35be-4888-b2ee-47bbcc76f213","root_ids":["66650"],"roots":{"66650":"3476b476-b584-447e-91f7-49de768c3baf"}}];
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