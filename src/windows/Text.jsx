import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return(
     <>
        <div id="window-header">
           <WindowControls target="txtfile" />
           <h2>{name}</h2>
        </div>

        <div className="text-content bg-white">
          {image ? (
             <div className="image-container">
                <img src={image} alt={name} className="w-full h-auto rounded" />
             </div>
          ) : null}

          {subtitle ? <h3 className="subtitle">{subtitle}</h3> : null}

          {Array.isArray(description) && description.length > 0 ? (
             <div className="description">
               {description.map((para, idx) => (
                  <p key={idx}>{para}</p>
               ))}
             </div>
          ) : null}
        </div>
     </>
  );
}; 

  const TextWindow = WindowWrapper(Text, "txtfile");

  export default TextWindow;