import { mdiGeneratorPortable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GeneratorPortable(props: IconComponentProps) {
  return <Icon path={mdiGeneratorPortable} {...props} />;
}

export { mdiGeneratorPortable as path };
