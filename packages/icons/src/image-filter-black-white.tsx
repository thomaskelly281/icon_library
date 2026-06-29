import { mdiImageFilterBlackWhite } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageFilterBlackWhite(props: IconComponentProps) {
  return <Icon path={mdiImageFilterBlackWhite} {...props} />;
}

export { mdiImageFilterBlackWhite as path };
