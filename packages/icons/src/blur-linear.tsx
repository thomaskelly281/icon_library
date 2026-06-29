import { mdiBlurLinear } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlurLinear(props: IconComponentProps) {
  return <Icon path={mdiBlurLinear} {...props} />;
}

export { mdiBlurLinear as path };
