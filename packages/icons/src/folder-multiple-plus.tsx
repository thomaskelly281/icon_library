import { mdiFolderMultiplePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderMultiplePlus(props: IconComponentProps) {
  return <Icon path={mdiFolderMultiplePlus} {...props} />;
}

export { mdiFolderMultiplePlus as path };
