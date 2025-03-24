import { useEffect, useRef } from "react";

const ChatBotWidget = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (document.querySelector('script[data-chatbot-widget]')) {
      return; // Prevent duplicate script injection
    }

    const script = document.createElement("script");
    script.src = "https://cdn.openwidget.com/openwidget.js";
    script.async = true;
    script.dataset.chatbotWidget = "true"; // Custom attribute to identify the script
    document.head.appendChild(script);
    scriptRef.current = script;

    // Initialize ChatBot settings
    window._ow = window._ow || {};
    window.__ow = {
      organizationId: "e4a0d761-a2cd-4555-ad37-4e268f76c106",
      template_id: "4808356b-827f-4e26-bf4f-a0cf2ae76a35",
      integration_name: "manual_settings",
      product_name: "chatbot",
    };

    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <noscript>
      You need to{" "}
      <a
        href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/"
        rel="noopener nofollow"
      >
        enable JavaScript
      </a>{" "}
      in order to use the AI chatbot tool powered by{" "}
      <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">
        ChatBot
      </a>
    </noscript>
  );
};

export default ChatBotWidget;
