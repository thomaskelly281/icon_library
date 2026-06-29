import { mdiSourceRepositoryMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceRepositoryMultiple(props: IconComponentProps) {
  return <Icon path={mdiSourceRepositoryMultiple} {...props} />;
}

export { mdiSourceRepositoryMultiple as path };
