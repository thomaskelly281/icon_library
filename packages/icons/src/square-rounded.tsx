import { mdiSquareRounded } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareRounded(props: IconComponentProps) {
  return <Icon path={mdiSquareRounded} {...props} />;
}

export { mdiSquareRounded as path };
