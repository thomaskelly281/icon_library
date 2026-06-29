import { mdiMaterialUi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MaterialUi(props: IconComponentProps) {
  return <Icon path={mdiMaterialUi} {...props} />;
}

export { mdiMaterialUi as path };
