import { mdiFileFindOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileFindOutline(props: IconComponentProps) {
  return <Icon path={mdiFileFindOutline} {...props} />;
}

export { mdiFileFindOutline as path };
