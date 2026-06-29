import { mdiPartyPopper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PartyPopper(props: IconComponentProps) {
  return <Icon path={mdiPartyPopper} {...props} />;
}

export { mdiPartyPopper as path };
