import { mdiTournament } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tournament(props: IconComponentProps) {
  return <Icon path={mdiTournament} {...props} />;
}

export { mdiTournament as path };
