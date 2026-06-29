import { mdiFolderArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowRight(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowRight} {...props} />;
}

export { mdiFolderArrowRight as path };
