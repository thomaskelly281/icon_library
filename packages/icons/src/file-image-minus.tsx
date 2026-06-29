import { mdiFileImageMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImageMinus(props: IconComponentProps) {
  return <Icon path={mdiFileImageMinus} {...props} />;
}

export { mdiFileImageMinus as path };
