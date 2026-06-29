import { mdiFitToPage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FitToPage(props: IconComponentProps) {
  return <Icon path={mdiFitToPage} {...props} />;
}

export { mdiFitToPage as path };
