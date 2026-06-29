import { mdiBallot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ballot(props: IconComponentProps) {
  return <Icon path={mdiBallot} {...props} />;
}

export { mdiBallot as path };
