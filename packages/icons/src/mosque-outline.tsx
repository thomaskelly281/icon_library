import { mdiMosqueOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MosqueOutline(props: IconComponentProps) {
  return <Icon path={mdiMosqueOutline} {...props} />;
}

export { mdiMosqueOutline as path };
