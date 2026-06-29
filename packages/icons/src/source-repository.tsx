import { mdiSourceRepository } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceRepository(props: IconComponentProps) {
  return <Icon path={mdiSourceRepository} {...props} />;
}

export { mdiSourceRepository as path };
