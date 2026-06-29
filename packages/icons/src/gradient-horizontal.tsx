import { mdiGradientHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GradientHorizontal(props: IconComponentProps) {
  return <Icon path={mdiGradientHorizontal} {...props} />;
}

export { mdiGradientHorizontal as path };
