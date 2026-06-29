import { mdiSquareRoundedBadge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareRoundedBadge(props: IconComponentProps) {
  return <Icon path={mdiSquareRoundedBadge} {...props} />;
}

export { mdiSquareRoundedBadge as path };
