import { mdiMaterialDesign } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MaterialDesign(props: IconComponentProps) {
  return <Icon path={mdiMaterialDesign} {...props} />;
}

export { mdiMaterialDesign as path };
