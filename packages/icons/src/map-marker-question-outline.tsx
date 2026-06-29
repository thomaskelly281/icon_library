import { mdiMapMarkerQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerQuestionOutline} {...props} />;
}

export { mdiMapMarkerQuestionOutline as path };
