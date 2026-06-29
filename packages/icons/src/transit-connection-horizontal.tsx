import { mdiTransitConnectionHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransitConnectionHorizontal(props: IconComponentProps) {
  return <Icon path={mdiTransitConnectionHorizontal} {...props} />;
}

export { mdiTransitConnectionHorizontal as path };
