import { mdiViewAgendaOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewAgendaOutline(props: IconComponentProps) {
  return <Icon path={mdiViewAgendaOutline} {...props} />;
}

export { mdiViewAgendaOutline as path };
