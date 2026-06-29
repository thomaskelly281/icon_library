import { mdiTexture } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Texture(props: IconComponentProps) {
  return <Icon path={mdiTexture} {...props} />;
}

export { mdiTexture as path };
