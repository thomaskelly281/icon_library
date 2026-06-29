import { mdiBabyFace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BabyFace(props: IconComponentProps) {
  return <Icon path={mdiBabyFace} {...props} />;
}

export { mdiBabyFace as path };
