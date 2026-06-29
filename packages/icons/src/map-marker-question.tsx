import { mdiMapMarkerQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerQuestion(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerQuestion} {...props} />;
}

export { mdiMapMarkerQuestion as path };
