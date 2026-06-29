import { mdiLibraryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LibraryOutline(props: IconComponentProps) {
  return <Icon path={mdiLibraryOutline} {...props} />;
}

export { mdiLibraryOutline as path };
