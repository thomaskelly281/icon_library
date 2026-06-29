import { mdiArchiveMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveMinusOutline} {...props} />;
}

export { mdiArchiveMinusOutline as path };
