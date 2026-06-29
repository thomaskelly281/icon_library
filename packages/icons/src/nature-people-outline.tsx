import { mdiNaturePeopleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NaturePeopleOutline(props: IconComponentProps) {
  return <Icon path={mdiNaturePeopleOutline} {...props} />;
}

export { mdiNaturePeopleOutline as path };
