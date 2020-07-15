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
    
      
      
    
      var element = document.getElementById("0f380d54-a821-4d8e-8da3-dc97d7d37cf0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0f380d54-a821-4d8e-8da3-dc97d7d37cf0' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;ec054b10-e0b1-4e38-a40f-0218b6f7f0c3&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67598&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67552&quot;}},&quot;id&quot;:&quot;67551&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67581&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67547&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67550&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;67565&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;67555&quot;},{&quot;id&quot;:&quot;67556&quot;},{&quot;id&quot;:&quot;67557&quot;},{&quot;id&quot;:&quot;67558&quot;},{&quot;id&quot;:&quot;67559&quot;},{&quot;id&quot;:&quot;67560&quot;},{&quot;id&quot;:&quot;67561&quot;},{&quot;id&quot;:&quot;67562&quot;}]},&quot;id&quot;:&quot;67612&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67579&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67580&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67581&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67583&quot;}},&quot;id&quot;:&quot;67582&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67608&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67596&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67548&quot;}},&quot;id&quot;:&quot;67547&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;J6xp/+ZQxD+yZaauQd3EPz0f412cacU/ydgfDff1xT9Ukly8UYLGP99LmWusDsc/awXWGgebxz/2vhLKYSfIP4F4T3m8s8g/DTKMKBdAyT+Y68jXcczJPyOlBYfMWMo/r15CNiflyj86GH/lgXHLP8bRu5Tc/cs/UYv4QzeKzD/cRDXzkRbNP2j+caLsos0/87euUUcvzj9+cesAorvOPworKLD8R88/leRkX1fUzz8Qz1AHWTDQP9Ur716GdtA/m4iNtrO80D9h5SsO4QLRPyZCymUOSdE/7J5ovTuP0T/snmi9O4/RP+yeaL07j9E/JkLKZQ5J0T9h5SsO4QLRP5uIjbazvNA/1SvvXoZ20D8Qz1AHWTDQP5XkZF9X1M8/CisosPxHzz9+cesAorvOP/O3rlFHL84/aP5xouyizT/cRDXzkRbNP1GL+EM3isw/xtG7lNz9yz86GH/lgXHLP69eQjYn5co/I6UFh8xYyj+Y68jXcczJPw0yjCgXQMk/gXhPebyzyD/2vhLKYSfIP2sF1hoHm8c/30uZa6wOxz9Ukly8UYLGP8nYHw339cU/PR/jXZxpxT+yZaauQd3EPyesaf/mUMQ/J6xp/+ZQxD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3yK2u0T4Pw/fIra7RPg/8qjZ0TzD+D9WDkJQtUH5P6Catz/wvvk/kMvCt/5C+j8zxVBXos76P/jbiQf1X/s/MDIaD039+z80BrT9B6T8P0r+MF88VP0/XoA27hEO/j85HJTsANP+PzVBqVmbnf8/scz1sDc4AEAXzQ93w6UAQE41abiqEQFAnam/abR9AUATOK3ZGuoBQKM5pnzHUwJAaU1RMVa6AkD3erwW2xwDQEVcAyVGewNAh+wlRl7VA0A6l9UM1ywEQDZ4+wwhgQRAhcvyQTLTBEDT34ZzCSUFQPRZG5gbdgVAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67606&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67607&quot;}},&quot;id&quot;:&quot;67584&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67579&quot;}},&quot;id&quot;:&quot;67583&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67609&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67586&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67547&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67550&quot;},{&quot;id&quot;:&quot;67554&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67551&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67577&quot;},{&quot;id&quot;:&quot;67582&quot;},{&quot;id&quot;:&quot;67587&quot;},{&quot;id&quot;:&quot;67592&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67595&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67565&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;67539&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67543&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67541&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67545&quot;}},&quot;id&quot;:&quot;67538&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67551&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67554&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67585&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67545&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[270]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIexlEja6ps/h7GUSNrqmz+XpRLVypWbP7Z4vOCjMps/tjyETqr7mj+SJ1lJm7uaPz+2RCzql5o/2BMaHBCimj8Wijb11vGaP2EoQbaGkps/t8ZE9uWBnD80cNmxIcGdP3xfq7N/S58/Eal3lVSZoD9+YBDddZ6hP+IUPtrJtaI/tAk4SIXjoz9BVJ0nLAilP29bMgnaI6Y/BPWbi0kupz/WMTpOmiCoP1MipM2W9ag/2ZT2AsK3qT8KRVfZAlCqP65/9/itzKo/HuLJIJsmqz91ZO3HmICrPyU/bp3bu6s/AA4Jgtn0qz8kigf5MhusP97Rp4xkPaw/PIPynvptrD8S6F46camsP6QT5Q1s9aw/+0t3PnlJrT8r8VTpZMCtP7AXJ3evR64/SNTiyl35rj8mNg4G+c+vPwIMA5iCZ7A/AB6Fpc31sD8rTfIdIZOxP/o1kG79ULI/GcXFwbwcsz/QWw3Xb/mzPzTt6KyA+bQ/91QbAcACtj8tTaDJuBC3P4yPLyd9Qrg/Kf5pIKZ0uT9eab2TvrW6P5r12keOHLw/xDJRxNNwvT+7SEXsqN++P9DK0vRJNcA/+uhpfJgBwT88+kMiiuPBP2wQEcaz0cI//1kb5Fvawz/NhFUFuQjFP6CaZIIhTcY/n3bGpGm+xz87+1NL8UvJP5Xo+aMUFMs/4IsyQ5UIzT++ph/r+hvPP2xYHQeDq9A/6Bvk/pLd0T+Ako6/yBbTP0JlUo32WtQ/fE9xjrKh1T+OpInsFujWPxgPXH+3Kdg/HC/suN9n2T9x6s4pzpraP2nM951EwNs/JQv88h/c3D84sO5zg+7dP33dAWYY894/6SsVLWjt3z9V/SpS63DgPxXyVooO6eA/1LQoGudh4T/77rgxWt/hP/IzRmHsXeI/Mf2cHdvi4j839e1I42jjP/uM9ZYr8+M/POiKBVSA5D8e4FT/8RPlP6vVMQIaqOU/EjxW6Zk95j+DPNCc69PmP9hqs6yBZOc/XjezxJLv5z8Kb+aeFXToPyPJn03B8eg/AYxbdT9h6T8I7TefycXpP5Yutl/iG+o/ynjXuhBi6j8vzr6gB57qP9nWjH6Czeo/WZTTxxnr6j/82UC9VAbrP+wlbLOEFus/bG5JJZIf6z8ToBdmUSPrPyFYRoElJes/+J4dk00o6z9xe/mmWzHrPyme9vLaQOs/rwaliQRb6z+v94oU83/rP1iuOJQXu+s/PhTHN9QJ7D+k9ZyfMnHsPwMbET/F+Ow/xw71kUSY7T/cuuY4BVXuP00k15YRLu8/TbVw208R8D8JhR28dpjwPxDLt8PnKvE/aHUBeXLG8T+d6FSgJ2nyP04whUkXDfM/jQWli0i18z/eqDUw9ln0P/lgmmHG+/Q/yxMI1PuX9T8KweUGpC32P34+lBtxuvY/g9CWpyRC9z+u9X239cT3PwAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[270]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67608&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67609&quot;}},&quot;id&quot;:&quot;67589&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67591&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67539&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67584&quot;}},&quot;id&quot;:&quot;67588&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67584&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67585&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67586&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67588&quot;}},&quot;id&quot;:&quot;67587&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67564&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67558&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67590&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;67612&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;67613&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67560&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67589&quot;}},&quot;id&quot;:&quot;67593&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67589&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67590&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67591&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67593&quot;}},&quot;id&quot;:&quot;67592&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67556&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67604&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67605&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67595&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67564&quot;}},&quot;id&quot;:&quot;67559&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67563&quot;}},&quot;id&quot;:&quot;67557&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67563&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67555&quot;},{&quot;id&quot;:&quot;67556&quot;},{&quot;id&quot;:&quot;67557&quot;},{&quot;id&quot;:&quot;67558&quot;},{&quot;id&quot;:&quot;67559&quot;},{&quot;id&quot;:&quot;67560&quot;},{&quot;id&quot;:&quot;67561&quot;},{&quot;id&quot;:&quot;67562&quot;}]},&quot;id&quot;:&quot;67565&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67574&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67575&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67576&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67578&quot;}},&quot;id&quot;:&quot;67577&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67561&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67562&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67602&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;67613&quot;},{&quot;id&quot;:&quot;67611&quot;}]},&quot;id&quot;:&quot;67614&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67543&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67596&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67603&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67606&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67552&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67575&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67607&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;67538&quot;},0,0]]},&quot;id&quot;:&quot;67611&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67598&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;iFpWnaKzsj+ezc/7V8yzP7VASVoN5bQ/zLPCuML9tT/iJjwXeBa3P/mZtXUtL7g/EA0v1OJHuT8mgKgymGC6Pz3zIZFNebs/VGab7wKSvD9r2RROuKq9P4FMjqxtw74/mL8HCyPcvz9XmcA0bHrAP+NS/ePGBsE/bgw6kyGTwT/5xXZCfB/CP4V/s/HWq8I/EDnwoDE4wz+b8ixQjMTDP5vyLFCMxMM/m/IsUIzEwz8QOfCgMTjDP4V/s/HWq8I/+cV2Qnwfwj9uDDqTIZPBP+NS/ePGBsE/V5nANGx6wD+YvwcLI9y/P4FMjqxtw74/a9kUTriqvT9UZpvvApK8Pz3zIZFNebs/JoCoMphguj8QDS/U4ke5P/mZtXUtL7g/4iY8F3gWtz/Ms8K4wv21P7VASVoN5bQ/ns3P+1fMsz+IWladorOyP4haVp2is7I/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[42]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAD1OI1xgVAgAPU4jXGBUD3Cuu5nxYGQEBIFDHuZwZA1/lmfJS7BkDTH5f6LBMHQNnmtO2KagdAjMU3ol3DB0DmO/QJsxsIQMUpGFmrcQhAaNofBgvGCEDEhp9cqBUJQAKVZS2bYQlAEQDrFLqoCUBvoDXZ4ekJQAfYOOapJApAyOnMtSVZCkDy9ZHG5IYKQF4UcHvmrQpAoJWsdpzOCkDIXtCJO+YKQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[42]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67604&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67605&quot;}},&quot;id&quot;:&quot;67579&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67548&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;+wtsi64uLz/LkfJby4RyP5vhxKEQCII/UHqQlbvNij+DCa5Es8mRP97Vk76ILJY/OKJ5OF6Pmj+Tbl+yM/KeP3edIpaEqqE/pIMVU+/boz/SaQgQWg2mP/9P+8zEPqg/LDbuiS9wqj9aHOFGmqGsP4cC1AMF064/WnRj4DeCsD9x59w+7ZqxP3Hn3D7tmrE/cefcPu2asT9adGPgN4KwP4cC1AMF064/WhzhRpqhrD8sNu6JL3CqP/9P+8zEPqg/0mkIEFoNpj+kgxVT79ujP3edIpaEqqE/k25fsjPynj84onk4Xo+aP97Vk76ILJY/gwmuRLPJkT9QepCVu82KP5vhxKEQCII/y5HyW8uEcj/7C2yLri4vP/sLbIuuLi8/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[36]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMvJZsgf9wpAy8lmyB/3CkCXs5MyIf8KQIY/8ybG/ApAIRQGH97wCkC1lma34NwKQJTO3bc9vwpAZJ01r7iaCkDQ+L0zGG8KQKWadiRkPgpAPgbX+Q8KCkAgLOhX5tQJQMiiDLjqoAlAtRhNsJ9wCUCAiqh7OUkJQFoML1Z5KwlAXNZzrxEXCUCgR4jc/xEJQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[36]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67602&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67603&quot;}},&quot;id&quot;:&quot;67574&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67576&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67555&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67580&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67574&quot;}},&quot;id&quot;:&quot;67578&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67541&quot;,&quot;type&quot;:&quot;DataRange1d&quot;}],&quot;root_ids&quot;:[&quot;67614&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"ec054b10-e0b1-4e38-a40f-0218b6f7f0c3","root_ids":["67614"],"roots":{"67614":"0f380d54-a821-4d8e-8da3-dc97d7d37cf0"}}];
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