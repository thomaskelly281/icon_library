import { mdiImageFilterCenterFocus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageFilterCenterFocus(props: IconComponentProps) {
  return <Icon path={mdiImageFilterCenterFocus} {...props} />;
}

export { mdiImageFilterCenterFocus as path };
