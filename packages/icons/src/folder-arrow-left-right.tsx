import { mdiFolderArrowLeftRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowLeftRight(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowLeftRight} {...props} />;
}

export { mdiFolderArrowLeftRight as path };
