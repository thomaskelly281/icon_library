import { mdiTextShadow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextShadow(props: IconComponentProps) {
  return <Icon path={mdiTextShadow} {...props} />;
}

export { mdiTextShadow as path };
