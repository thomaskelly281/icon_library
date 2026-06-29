import { mdiFolderArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiFolderArrowLeft} {...props} />;
}

export { mdiFolderArrowLeft as path };
