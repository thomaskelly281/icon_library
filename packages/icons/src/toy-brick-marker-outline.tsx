import { mdiToyBrickMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiToyBrickMarkerOutline} {...props} />;
}

export { mdiToyBrickMarkerOutline as path };
