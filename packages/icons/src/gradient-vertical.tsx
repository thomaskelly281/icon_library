import { mdiGradientVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GradientVertical(props: IconComponentProps) {
  return <Icon path={mdiGradientVertical} {...props} />;
}

export { mdiGradientVertical as path };
