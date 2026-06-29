import { mdiBallotRecount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BallotRecount(props: IconComponentProps) {
  return <Icon path={mdiBallotRecount} {...props} />;
}

export { mdiBallotRecount as path };
