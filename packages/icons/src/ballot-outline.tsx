import { mdiBallotOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BallotOutline(props: IconComponentProps) {
  return <Icon path={mdiBallotOutline} {...props} />;
}

export { mdiBallotOutline as path };
