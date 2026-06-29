import { mdiTextureBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextureBox(props: IconComponentProps) {
  return <Icon path={mdiTextureBox} {...props} />;
}

export { mdiTextureBox as path };
