import { mdiNewspaperVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NewspaperVariant(props: IconComponentProps) {
  return <Icon path={mdiNewspaperVariant} {...props} />;
}

export { mdiNewspaperVariant as path };
