import { mdiFileSign } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSign(props: IconComponentProps) {
  return <Icon path={mdiFileSign} {...props} />;
}

export { mdiFileSign as path };
