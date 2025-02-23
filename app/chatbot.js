import { useEffect } from "react";

const ChatBotWidget = () => {
  useEffect(() => {
    // This script is the exact code you provided to load the ChatBot widget.
    const script = document.createElement("script");
    script.innerHTML = `
      window.__ow = window.__ow || {};
      window.__ow.organizationId = "2c866b77-c547-479a-9271-02e09ff0d4c0";
      window.__ow.template_id = "232f7dd6-19dd-4c61-958c-41c35b0664ca";
      window.__ow.integration_name = "manual_settings";
      window.__ow.product_name = "chatbot";   
      (function(n,t,c){
        function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
        var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},
        once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},
        get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");
        return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},
        init:function(){var n=t.createElement("script");n.async=!0;n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}
      };!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice));
    `;

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup: Remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything, it just injects the script
};

export default ChatBotWidget;
