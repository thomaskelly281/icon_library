import { mdiBallotRecountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BallotRecountOutline(props: IconComponentProps) {
  return <Icon path={mdiBallotRecountOutline} {...props} />;
}

export { mdiBallotRecountOutline as path };
