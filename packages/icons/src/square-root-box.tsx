import { mdiSquareRootBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareRootBox(props: IconComponentProps) {
  return <Icon path={mdiSquareRootBox} {...props} />;
}

export { mdiSquareRootBox as path };
